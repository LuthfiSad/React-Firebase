import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export function useIsLogin() {
  const isLogin = useSelector(state => state.info.isLogin)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLogin) {
      navigate("/dashboard")
      Swal.fire({
        icon: 'error',
        text: 'You are already logged in!'
      })
    }
  }, [location.pathname])
}


export function useIsNotLogin() {
  const isLogin = useSelector(state => state.info.isLogin)
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (!isLogin) {
      Swal.fire({
        icon: 'error',
        text: 'Please login first!'
      })
      .then(() => {
        navigate('/')
      })
    }
  }, [location.pathname])
}