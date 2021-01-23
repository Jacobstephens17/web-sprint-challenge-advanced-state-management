import React from 'react';
import { getSmurfData } from '../actions';
import { connect } from 'react-redux';
import Smurf from "./Smurf"

export class SmurfDisplay extends React.Component {
    componentDidMount(){
        this.props.getSmurfData()
    }
    render() {
        return(<div>
            {this.props.smurfs.map((smurf) => {
                return <Smurf key = {smurf.id} smurf = {smurf}/>
            })}
        </div>)
    }
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}
export default connect(mapStateToProps,{getSmurfData})(SmurfDisplay);