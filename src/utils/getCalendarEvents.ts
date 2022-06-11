import ApiCalendar from 'react-google-calendar-api';

// TODO : @ts-ignoreの改善
export const getEvents = async () =>
  new Promise((resolve) => {
    // 2.認証チェック
    // @ts-ignore
    if (ApiCalendar.sign) {
      // 3.イベントの取得
      // @ts-ignore
      ApiCalendar.listEvents({
        timeMin: new Date().toISOString(),
        // @ts-ignore
        timeMax: new Date().addDays(10).toISOString(),
        showDeleted: true,
        maxResults: 10,
        orderBy: 'updated',
        // @ts-ignore
      }).then(({ result }) => {
        if (result.items) {
          console.log('Events From Calendar', result.items);
        } else {
          console.log('No Events');
        }

        resolve(result);
      });
    } else {
      // 2’.認証していなければOAuth認証
      // @ts-ignore
      ApiCalendar.handleAuthClick();

      resolve(null);
    }
  });
