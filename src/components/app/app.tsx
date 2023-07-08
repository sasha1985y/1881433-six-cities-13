import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type AppScreenProps = {
  favoritesCount: number;
  placesFound: number;
}

function App({
  favoritesCount,
  placesFound
}: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen
      favoritesCount={favoritesCount}
      placesFound={placesFound}
    />
  );
}

export default App;
