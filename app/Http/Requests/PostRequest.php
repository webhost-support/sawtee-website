<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|unique:posts|max:255',
            'slug' => 'nullable|string|unique:posts|max:255',
            'content' => 'nullable|string',
            'excerpt' => 'nullable|string|max:1000',
            'category_id' => 'required|numeric|exists:categories,id',
            'theme_id' => 'nullable|numeric|exists:themes,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'author' => 'nullable|string|max:255',
            'status' => 'required|string|max:255',
            'file' => 'nullable|file|mimes:pdf,doc,docx,ppt,pptx|max:10240',
            'link' => 'nullable|string|max:255',
            'published_at' => 'nullable|date',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255'
        ];
    }
}