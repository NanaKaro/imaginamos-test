import { useDispatch } from 'react-redux';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { setUser } from '../../store/features/user/userSlice';
import './styles.scss';

const providerG = new GoogleAuthProvider();
const providerT = new TwitterAuthProvider();
const providerF = new FacebookAuthProvider();

enum SocialNetworks {
  FACEBOOK = 'FACEBOOK',
  GOOGLE = 'GOOGLE',
  TWITTER = 'TWITTER',
}

function Footer(): JSX.Element {
  const dispatch = useDispatch();

  const signIn = async (socialNetwork: string) => {
    const auth = getAuth();
    let provider = providerG;

    if (socialNetwork === SocialNetworks.FACEBOOK) {
      provider = providerF;
    } else if (socialNetwork === SocialNetworks.TWITTER) {
      provider = providerT;
    }

    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      dispatch(
        setUser({
          name: user.displayName || 'User',
          email: user.email,
          photo: user.photoURL,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Footer">
      <div id="socialHead" className="text__margin--bottom1">
        Ingresa a Chukwudi desde tus redes sociales
      </div>
      <div className="socialLogin">
        <button
          type="button"
          className="buttonLogin buttonLogin--fb"
          onClick={() => signIn(SocialNetworks.FACEBOOK)}>
          <em className="buttonLogin__name buttonLogin__name--fb">f</em>
          <span className="buttonLogin__text">Sign In with Facebook</span>
        </button>

        <button
          type="button"
          className="buttonLogin buttonLogin--gplus"
          onClick={() => signIn(SocialNetworks.GOOGLE)}>
          <em className="buttonLogin__name buttonLogin__name--gp">g+</em>
          <span className="buttonLogin__text">Sign In with Google</span>
        </button>

        <button
          type="button"
          className="buttonLogin buttonLogin--twt"
          onClick={() => signIn(SocialNetworks.TWITTER)}>
          <em className="buttonLogin__name buttonLogin__name--twt">t</em>
          <span className="buttonLogin__text">Sign In with Twitter</span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
