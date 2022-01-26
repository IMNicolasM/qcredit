const moduleName = 'icredit';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  credits: `${urlBase}/credits`,
  withdrawalFunds: `${urlBase}/withdrawal-funds`,
}
