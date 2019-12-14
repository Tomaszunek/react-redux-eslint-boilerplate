import React, { FunctionComponent, Fragment } from 'react';
import { connect } from "react-redux";
import { AppState } from "../../store";
import { INCRE, DECRE } from "../../store/Counter/actions";

import { thunkSendMessage } from "../../thunks";

import Header from '../../components/Header';

import { Counter } from '../../store/Counter/types';
import s from './styles.scss';

interface WelcomeProps {
  INCRE: typeof INCRE;
  DECRE: typeof DECRE;
  counter: Counter;
  thunkSendMessage: any;
}

const Welcome: FunctionComponent<WelcomeProps> = (props) => {
  const { DECRE, INCRE, counter, thunkSendMessage} = props;
  const { count } = counter;
  return (
  <Fragment>
    <Header />
    <section className={s.welcome}>
      <span>
        {count && count.toString()}
      </span>
    </section>
  </Fragment>
  )
};



const mapStateToProps = (state: AppState) => ({
  counter: state,
});

export default connect(
  mapStateToProps,
  { INCRE, DECRE, thunkSendMessage }
)(Welcome);
