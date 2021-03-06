import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { JPush } from '@jiguang-ionic/jpush';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = TabsPage;

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        jpush: JPush,
    ) {
        platform.ready().then(() => {

            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            // jpush init
            jpush.init().then(() => {
                console.log('jpush init succeed');
            }).catch(err => {
                console.log('jpush init error');
            })

            // jpush get Registration ID
            jpush.getRegistrationID().then(id => {
                console.log('RegistrationID: ' + id);
            }).catch(err => {
                console.log('Get Registration ID Error');
            })

            jpush.setDebugMode(true);

        });
    }
}
