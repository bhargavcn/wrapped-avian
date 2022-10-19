const url = 'https://api.avn.network/transaction/bfc25fa6cff75a35ca9c4cebfd92ad5eba393e25e762e19afe988948a4f58616';
export async function getvalue() {
	const response = await fetch(url);
	const data = await response.json();
  const {value} = data.result.vout[0];
	console.log(value);
}
getvalue();