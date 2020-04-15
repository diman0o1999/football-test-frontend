import React, { useEffect } from 'react';
import {
  Button,
  Card,
  CardColumns,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import map from 'lodash/map';

import CentralSpinner from '../../components/CentralSpinner';
import { fetchAuthorsRequested } from '../../../../store/authors/action';

const AuthorsList = ()  => {

  const dispatch = useDispatch();
  const authorsState = useSelector((state) => state.authors);

  const { authors, isLoading } = authorsState;

  useEffect(() => {
    dispatch(fetchAuthorsRequested())
    console.log('authorsList', authorsState);
  }, [dispatch,fetchAuthorsRequested]);

  if (isLoading) {
    return <CentralSpinner/>;
  }

  return (
    <>
      <div className='text-center'>
        <CardColumns>
          {
            map(authors, (author, _key) =>
              <Card key={author.id}>
                <Card.Body>
                  <Card.Title>{author.name}</Card.Title>
                  <Card.Body>
                    {/*
                        Массив его стайтей  тут будет
                        Заголовок  об авторе подробно  модкалка круто
                    */}
                    <Button variant='dark'
                      // onClick={() => dispatch(getAuthor(author.id))}
                    >ID: {author.id}</Button>
                  </Card.Body>
                </Card.Body>
              </Card>
            )
          }
        </CardColumns>
      </div>
    </>
  );
};

export default AuthorsList;
