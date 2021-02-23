import Realm from 'realm';

// Returns the shared instance of the Realm app.
export function getRealmApp() {
  const appId = 'openthoughts-jssnm'; // Set Realm app ID here.
  const appConfig = {
    id: appId,
    timeout: 10000,
  };
  return new Realm.App(appConfig);
}
