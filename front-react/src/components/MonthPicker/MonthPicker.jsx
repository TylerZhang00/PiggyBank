import React, {Component} from 'react';

import Picker from 'react-month-picker'
import 'react-month-picker/css/month-picker.css';


class MonthBox extends Component {
    constructor(props, context) {
      super(props, context)
      this.state = {
          value: this.props.value || 'N/A',
      }
      this._handleClick = this._handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps){
      this.setState({
          value: nextProps.value || 'N/A',
      })
    }

    render() {
      return (
        <div className="box" onClick={this._handleClick}>
            <label>{this.state.value}</label>
        </div>
      );
    }

    _handleClick(e) {
      this.props.onClick && this.props.onClick(e);
    }
}


class List extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            mvalue: {year: 2020, month: 1},
            // mvalue2: {year: 2020, month: 12},
            mrange: {from: {year: 2019, month: 8}, to: {year: 2021, month: 12}},
            // mrange2: {from: {year: 2013, month: 11}, to: {year: 2016, month: 3}},
        }

        this.handleClickMonthBox = this.handleClickMonthBox.bind(this)
        this.handleAMonthChange = this.handleAMonthChange.bind(this)
        this.handleAMonthDissmis = this.handleAMonthDissmis.bind(this)

        this.handleClickMonthBox2 = this.handleClickMonthBox2.bind(this)
        this.handleAMonthChange2 = this.handleAMonthChange2.bind(this)
        this.handleAMonthDissmis2 = this.handleAMonthDissmis2.bind(this)

        this._handleClickRangeBox = this._handleClickRangeBox.bind(this)
        this.handleRangeChange = this.handleRangeChange.bind(this)
        this.handleRangeDissmis = this.handleRangeDissmis.bind(this)

        this._handleClickRangeBox2 = this._handleClickRangeBox2.bind(this)
        this.handleRangeChange2 = this.handleRangeChange2.bind(this)
        this.handleRangeDissmis2 = this.handleRangeDissmis2.bind(this)
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value || 'N/A',
        })
    }

    render() {

        const pickerLang = {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            from: 'From', to: 'To',
        }
        const mvalue = this.state.mvalue
            , mvalue2 = this.state.mvalue2
            , mrange = this.state.mrange
            , mrange2 = this.state.mrange2

        const makeText = m => {
            if (m && m.year && m.month) return (pickerLang.months[m.month-1] + '. ' + m.year)
            return '?'
        }

        return (
            <ul>
                <li>
                    <label>Change Month</label>
                    <div className="edit">
                        <Picker
                            ref="pickAMonth"
                            years={[2019, 2020, 2021]}
                            value={mvalue}
                            lang={pickerLang.months}
                            onChange={this.handleAMonthChange}
                            onDismiss={this.handleAMonthDissmis}
                            chgMonth={this.props.chgMonth}
                        >
                            <MonthBox value={makeText(mvalue)}
                             chgMonth={this.props.chgMonth}
                             onClick={this.handleClickMonthBox} />
                        </Picker>
                    </div>
                </li>

            </ul>
        )
    }

    handleClickMonthBox(e) {
        this.refs.pickAMonth.show()
    }
    handleAMonthChange(e, value, text) {
      
    }
    handleAMonthDissmis(value) {
        this.setState( {mvalue: value} )
        console.log(value)
        console.log(this.state)
        console.log(this.props)
        this.props.chgMonth(value)
    }

    handleClickMonthBox2(e) {
        this.refs.pickAMonth2.show()
    }
    handleAMonthChange2(value, text) {
        //
    }
    handleAMonthDissmis2(value) {
        this.setState( {mvalue2: value} )
    }

    _handleClickRangeBox(e) {
        this.refs.pickRange.show()
    }
    handleRangeChange(value, text, listIndex) {
        //
    }
    handleRangeDissmis(value) {
        this.setState( {mrange: value} )
    }

    _handleClickRangeBox2(e) {
        this.refs.pickRange2.show()
    }
    handleRangeChange2(value, text, listIndex) {
        //
    }
    handleRangeDissmis2(value) {
        this.setState( {mrange2: value} )
    }
}

class Main extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            value: this.props.value
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value
        })
    }

    render() {
        return (
            <div className="list-area">
                <List chgMonth={this.props.chgMonth} />
            </div>
        )
    }
}



export default (props) => {
  console.log(props)
  return (<Main chgMonth={props.chgMonth}/>);

}
