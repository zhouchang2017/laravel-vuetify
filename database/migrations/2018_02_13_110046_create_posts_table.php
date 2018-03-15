<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title',64)->comment('文章标题');
            $table->string('avatar')->comment('图片')->nullable();
            $table->text('body')->comment('正文');
            $table->unsignedSmallInteger('user_id')->comment('作者');
            $table->string('originate')->comment('来源')->nullable();
            $table->unsignedInteger('read_num')->comment('阅读量')->default(0);
            $table->unsignedInteger('fake_read_num')->comment('假阅读量')->default(0);
            $table->unsignedTinyInteger('hidden')->default(0)->comment('是否隐藏');
            $table->unsignedTinyInteger('is_hot')->default(0)->comment('是否热门');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
