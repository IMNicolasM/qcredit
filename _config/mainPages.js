export default {
  //Wallet
  wallet: {
    permission: 'icredit.credits.manage',
    activated: true,
    path: '/credit/wallet',
    name: 'qcredit.main.credits.index',
    page: () => import('modules/qcredit/_pages/main/wallet'),
    layout: () => import('layouts/master.vue'),
    title: 'icredit.cms.sidebar.adminWallet',
    icon: 'fas fa-wallet',
    authenticated: true,
    subHeader: {refresh: true}
  }
}
