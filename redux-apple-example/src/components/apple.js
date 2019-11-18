import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { wash, eat, rot } from '../actions/appleActions';

const Apple = ({ wash, eat, rot, dirty, remainingBites, color  }) => (
    <div>
        <p>Dirty: {dirty ? 'true' : 'false'}</p>
        <p>Remaining bites: {remainingBites}</p>
        <p>Color: {color}</p>

        <button onClick={wash}>Wash apple</button>
        <button onClick={eat}>Eat apple</button>
        <button onClick={rot}>Rot apple</button>
    </div>
);

const mapStateToProps = (state) => ({
    dirty: state.apple.dirty,
    remainingBites: state.apple.remainingBites,
    color: state.apple.color
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    wash,
    eat,
    rot,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Apple); // Connects `Apple` to the Redux store