# ionic-jpush-example ###

基于极光官方插件完成的example

### 如何运行 ###

* git clone git@github.com:goodjun/ionic-jpush-example.git
* cd ionic-jpush-example
* npm i
* ionic-jpush-example/config.xml 和 ionic-jpush-example/package.json 中的your_jpush_appkey更换为自己的极光appkey
* cordova platform rm ios
* cordova platform add ios
* ionic build ios
* 使用xcode打开生成的project运行，路径是ionic-jpush-example/platforms/ios/ionic-jpush-example.xcodeproj

### 注意事项 ###

* 需要在xcode上调试才能使用到jpush插件，使用Ionic DevApp无法调试，否则会出现"plugin_not_installed"错误
* 本example只在ios环境测试过，未在android测试环境测试过，不过在android环境上应该问题不大