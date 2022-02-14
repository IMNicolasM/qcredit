export default {
  //Wallet
  wallet: {
    permission: 'icredit.credits.manage',
    activated: true,
    path: '/credit/wallet',
    name: 'qcredit.main.credits.index',
    page: () => import('@imagina/qcredit/_pages/main/wallet'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'icredit.cms.sidebar.adminWallet',
    icon: 'fas fa-wallet',
    authenticated: true,
    subHeader: {refresh: true}
  }
}
