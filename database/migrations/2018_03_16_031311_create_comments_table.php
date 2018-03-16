<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateCommentsTable.
 */
class CreateCommentsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('comments', function(Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('post_id')->comment('文章id');
            $table->text('body')->comment('评论内容');
            $table->unsignedInteger('user_id')->comment('作者id');
            $table->unsignedInteger('follow_num')->comment('赞同数')->default(0);
            $table->unsignedInteger('oppose_num')->comment('反对数')->default(0);
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
		Schema::drop('comments');
	}
}
