import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setUser } from "../../Redux/slices/user";
import {} from "firebase/auth";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAuthByEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginEmail = (e, email, pass) => {
    console.log(email);
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(alert("Пошта чи пороль не вірні або поля пусті"));
  };
  return { handleLoginEmail };
};

export const useRegByEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingUp = (e, email, pass) => {
    console.log(email);

    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(alert("Пошта чи пороль не вірні або поля пусті"));
  };
  return { handleSingUp };
};
