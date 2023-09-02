import React from 'react';
import Router from 'next/router';
import { useEffect } from 'react';
import useRequest from '../../hooks/use-request';

export default function signout() {
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'get',
    onSuccess: () => Router.push('/'),
  });

  useEffect(() => {
    doRequest();
  }, []);
  return <div>signing out</div>;
}
