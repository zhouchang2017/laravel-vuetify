<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'=>'bail|required|max:64',
            'body'=>'bail|required|min:10'
        ];
    }

    public function messages()
    {
        return [
            'title.required'=>'文章标题不能为空',
            'title.max'=>'文章标题最多64个字符',
            'body.required'=>'文章内容不能为空',
            'body.min'=>'文章内容至少10个字符',
        ];
    }
}
