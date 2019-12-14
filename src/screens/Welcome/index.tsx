import React, { FunctionComponent, Fragment } from 'react';
import { connect } from "react-redux";
import { IRootState } from "../../store";
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
  // const { DECRE, INCRE, counter, thunkSendMessage} = props;
  const { count } = props.counter;
  console.log(count)
  return (
  <Fragment>
    <Header />
    <section className={s.welcome}>
      <span>
        {count}
      </span>
    </section>
  </Fragment>
  )
};



const mapStateToProps = (state: IRootState) => ({
  counter: state.counter,
});

export default connect(
  mapStateToProps,
  { INCRE, DECRE, thunkSendMessage }
)(Welcome);
