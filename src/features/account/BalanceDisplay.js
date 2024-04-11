import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({balance}) {

  // new way to access state
  // const amount = useSelector(store => store.account.balance)

  return <div className="balance">{formatCurrency(balance)}</div>;
}

// old way to access the state from redux store
function mapStateToProps(state){
  return {
    balance: state.account.balance,
  }
}

export default connect(mapStateToProps)(BalanceDisplay);
  