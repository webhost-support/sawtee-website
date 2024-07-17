<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubscribeRequest;
use App\Jobs\JoinSubscriberJob;
use App\Mail\SubscriptionVerified;
use App\Mail\Unsubscribed;
use App\Mail\VerifySubscriptionMail;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;


class SubscriptionController extends Controller
{

    public function index()
    {
        $subscribers = Subscriber::all();
        return Inertia::render("Backend/Subscriber/Index", ['subscribers' => $subscribers]);
    }
    public function store(SubscribeRequest $request)
    {

        $validated = $request->validated();
        $token = hash('sha256', time());
        $subscriber = Subscriber::create([
            'email' => $validated['email']
        ]);
        $subscriber->token = $token;
        $subscriber->save();
        Mail::to($subscriber->email)
            ->send(new VerifySubscriptionMail($subscriber));

        return redirect()->back();
    }

    public function verify(string $token)
    {
        $subscriber = Subscriber::where('token', $token)->firstOrFail();
        Mail::to($subscriber->email)
            ->send(new SubscriptionVerified($subscriber));
        $subscriber->update([
            'token' => null,
            'verified_at' => now(),
            'status' => 'verified'
        ]);

        return redirect('/')
            ->with('success', 'You have successfully verified your email.');
    }

    public function unsubscribe(string $email)
    {
        $subscriber = Subscriber::where('email', $email)->firstOrFail();

        Mail::to($subscriber->email)
            ->send(new Unsubscribed($subscriber));
        $subscriber->delete();
        return redirect()->back();
    }
}
