var React = require('react');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading')

function StartOverButton() {
  return (
    <div className="col-sm-12" styles={styles.space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  );
}

function Results(props) {
  if (props.isLoading) {
    return (
      <Loading text='One moment' speed={100}/>
    );
  }
  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1> It is a tie</h1>
        <StartOverButton />
      </MainContainer>
    );
  }
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
      <h1> Results </h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper title="Winner">
          <UserDetails
            score={props.scores[winningIndex]}
            info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper title="Loser">
          <UserDetails
            score={props.scores[losingIndex]}
            info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOverButton />
    </MainContainer>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;