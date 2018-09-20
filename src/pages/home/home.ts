import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { JPush } from '@jiguang-ionic/jpush';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        public navCtrl: NavController,
        public jpush: JPush
    ) {
        //
    }

    // 停止接收推送
    stopPush() {
        this.jpush.stopPush().then(() => {
            console.log('stopPush succeed');
        }).catch(err => {
            console.log('stopPush error');
        })
    }

    // 继续接收推送
    resumePush() {
        this.jpush.resumePush().then(() => {
            console.log('resumePush succeed');
        }).catch(err => {
            console.log('resumePush error');
        })
    }

    // 设置badge
    setBadge() {
        this.jpush.setBadge(99).then(() => {
            console.log('setBadge succeed');
        }).catch(err => {
            console.log('setBadge error');
        })
    }

    // 重置badge
    resetBadge() {
        this.jpush.resetBadge().then(() => {
            console.log('resetBadge succeed');
        }).catch(err => {
            console.log('resetBadge error');
        })
    }

    // 清空所有推送
    clearAllNotification() {
        this.jpush.clearAllNotification().then(() => {
            console.log('clearAllNotification succeed');
        }).catch(err => {
            console.log('clearAllNotification error');
        })
    }

    // 推送一条本地推送
    addLocalNotification() {
        this.jpush.addLocalNotificationForIOS(0, 'test push', 1, 'uuid').then(() => {
            console.log('addLocalNotification succeed');
        }).catch(err => {
            console.log('addLocalNotification error');
        })
    }

}
