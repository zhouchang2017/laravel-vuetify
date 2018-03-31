<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateBannersTable.
 */
class CreateBannersTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('banners', function(Blueprint $table) {
            $table->increments('id');
            $table->string('type')->default('main')->comment('类型');
            $table->string('url')->comment('链接');
            $table->string('avatar')->comment('海报图片');
            $table->string('title')->comment('广告标题');
            $table->string('description')->comment('广告描述');
            $table->unsignedInteger('post_id')->nullable()->comment('文章id');
            $table->integer('sort')->default(0)->comment('排序');
            $table->dateTime('start_at')->comment('开始时间');
            $table->dateTime('end_at')->comment('结束时间');
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
		Schema::drop('banners');
	}
}
