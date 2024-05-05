<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubscribeRequest;
use Inertia\Inertia;
use Spatie\Newsletter\Facades\Newsletter;

class SubscriptionController extends Controller
{

    public function index()
    {
        // $subscribers = Subscriber::whereNotNull('verified_at')->simplePaginate(50);
        return Inertia::render("Backend/Subscriber/Index");
    }


    public function subscribe (SubscribeRequest $request)
    {
        $validated = $request->validated();
        $isSubscribed = Newsletter::isSubscribed($validated['email']);
      

        try {
            if(!$isSubscribed){
            Newsletter::subscribe($validated['email']);
            return redirect()->back()->with('You have subscribed successfully.');
        }
        } catch (\Throwable $th) {
            throw $th;
        }

    }

    public function unsubscribe (string $email)
    {
        Newsletter::unsubscribe($email);
    }

    // public function store(SubscribeRequest $request)
    // {

    //     $validated = $request->validated();
    //     $token = hash('sha256', time());
    //     $subscriber = Subscriber::create([
    //         'email' => $validated['email']
    //     ]);
    //     $subscriber->token = $token;
    //     $subscriber->save();
    //     Mail::to($subscriber->email)
    //         ->send(new VerifySubscriptionMail($subscriber));

    //     return redirect()->back();
    // }

    // public function verify(string $token)
    // {
    //     $subscriber = Subscriber::where('token', $token)->firstOrFail();
    //     Mail::to($subscriber->email)
    //         ->send(new SubscriptionVerified($subscriber));
    //     $subscriber->update([
    //         'token' => null,
    //         'verified_at' => now(),
    //         'status' => 'verified'
    //     ]);

    //     return redirect('/')
    //         ->with('success', 'You have successfully verified your email.');

    // }

    // public function unsubscribe(string $email)
    // {
    //     $subscriber = Subscriber::where('email', $email)->firstOrFail();

    //     Mail::to($subscriber->email)
    //         ->send(new Unsubscribed($subscriber));
    //     $subscriber->delete();
    //     return redirect()->back();
    // }

}
