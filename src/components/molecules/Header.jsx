import { MuiAppBar, MuiToolbar, MuiTypography } from '../atoms'

export default function Header() {
  const displayDesktop = () => {
    return (<MuiToolbar>
                <MuiTypography variant="h6" component="h1" align="center" gutterBottom>
                    NewsAustralia
                </MuiTypography>
            </MuiToolbar>);
  };
  
  return (
    <header>
      <MuiAppBar>{displayDesktop()}</MuiAppBar>
    </header>
  );
}