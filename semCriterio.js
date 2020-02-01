function sleep(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function LikeTinderSemCriterio() 
{
	for ( var i = 0 ; i < 1000 ; i++ )
	{
		document.getElementsByClassName('button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style recsGamepad__button D(b) Bgc(#fff) Wc($transform) End(15px) Scale(1.1):h')[0].click()
		await sleep(1000);
	}
}
LikeTinderSemCriterio();
