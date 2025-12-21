// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import {Shared} from '@my-monorepo/shared';
export function App() {
  return (
    <div>
      <Shared title={'app2'}/>
    </div>
  );
}

export default App;
