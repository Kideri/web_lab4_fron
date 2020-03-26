import React from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";

export default class ResultsTable extends React.Component {


    constructor(props) {
        super(props);

        // this.state = {x: 0, y: 0, inside: ''};

        this.OnReRadiusClick = this.OnReRadiusClick.bind(this);
    }


    componentDidMount() {
    }


    render() {

        let tableData = [];


        if (this.props.results) {
            tableData = [...this.props.results];
        }


        tableData.forEach(p => {
            p.popalText = p.inside.toString();

        });
        tableData.reverse();
        return (
            <div className="ResultsTable">
                {/*<DataTableSubmenu />*/}


                <h3>Таблица результатов</h3>
                <DataTable value={tableData}>
                    <Column field="x" header="x"/>
                    <Column field="y" header="y"/>
                    <Column field="r" header="r"/>
                    <Column field="popalText" header="Попадание"/>
                </DataTable>
            </div>
        );
    }


    OnDeleteClick(point_id) {


        this.props.DeletePoint(point_id,this.props.r);


    }
    OnReRadiusClick(point_id) {


        this.props.ReDrawPoint(point_id,this.props.r);


    }
}


