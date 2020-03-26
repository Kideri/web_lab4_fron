import React from 'react';
import '../../../App.css';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';
import "./Register.css";


export default class Register extends React.Component {
   constructor(props){
        super(props);

        //TODO зачем это нужно
        this.OnRegisterClick= this.OnRegisterClick.bind(this);

   }


    OnRegisterClick(event){

        this.props.tryToRegister(document.getElementById("RegisterLoginText").value,document.getElementById("RegisterPassword").value,document.getElementById("RepeatPassword").value);
        this.props.openSecondPage();
    }

    render() {

       const {fail,success,repeatPasswordWrong} = this.props;

        return (

            <div className="Register">

                <h2>Зарегистрироваться</h2>
                <div className="form" id="form">

                <label  htmlFor="RegisterLoginText">Логин</label>
                <InputText className="RegisterInput" id="RegisterLoginText"/>

                <br/>

                <label htmlFor="RegisterPassword">Пароль</label>
                <Password feedback={false} className="RegisterInput" promptLabel="Введите пароль" weakLabel="Слабый" strongLabel="Сильный" mediumLabel="Средний" id="RegisterPassword"/>
                <br/>

                <label htmlFor="RepeatPassword">Повторить пароль</label>
                <Password className="RegisterInput" feedback={false} id="RepeatPassword"/>
                <br/>


                <Button className="RegisterInput" label="Зарегистрироваться"  onClick={this.OnRegisterClick}/>
                <p hidden={!fail}>Fail</p>
                <p hidden={!success}>success</p>
                <p hidden={!repeatPasswordWrong}>repeatPasswordWrong</p>

                </div>
            </div>
        );
    }
}

