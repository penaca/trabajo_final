import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,} from "reactstrap";

const data = [
  { id: 1, nombre: "Diana Perez", profesion: "Odontologa" },
  { id: 2, nombre: "Carlos Peña", profesion: "Medico" },
  { id: 3, nombre: "Fernanda Rodriguez", profesion: "Bacteriologa" },
];

            class App extends React.Component {
              state = {
                data: data,
                modalActualizar: false,
                modalInsertar: false,
                form: {
                  id: "",
                  nombre: "",
                  profesion: "",
                },
              };

              mostrarModalInsertar = () => {
                this.setState({
                  modalInsertar: true,
                });
              };

                cerrarModalInsertar = () => {
                  this.setState({ modalInsertar: false });
                };


                  mostrarModalActualizar = (dato) => {
                    this.setState({
                      form: dato,
                      modalActualizar: true,
                    });
                  };

                    cerrarModalActualizar = () => {
                      this.setState({ modalActualizar: false });
                    };



                      editar = (dato) => {
                        var contador = 0;
                        var arreglo = this.state.data;
                        arreglo.map((registro) => {
                          if (dato.id == registro.id) {
                            arreglo[contador].nombre = dato.nombre;
                            arreglo[contador].profesion = dato.profesion;
                          }
                          contador++;
                        });
                        this.setState({ data: arreglo, modalActualizar: false });
                      };

                      eliminar = (dato) => {
                        var contador = 0;
                        var arreglo = this.state.data;
                          arreglo.map((registro) => {
                            if (dato.id == registro.id) {
                              arreglo.splice(contador, 1);
                            }
                            contador++;
                          });
                          this.setState({ data: arreglo, modalActualizar: false });
                        }

                          insertar= ()=>{
                            var valorNuevo= {...this.state.form};
                            valorNuevo.id=this.state.data.length+1;
                            var lista= this.state.data;
                            lista.push(valorNuevo);
                            this.setState({ modalInsertar: false, data: lista });
                          }

                          handleChange = (e) => {
                            this.setState({
                              form: {
                                ...this.state.form,
                                [e.target.name]: e.target.value,
                              }
                            })
                          }



                      render() {

                      return (
                        <>
                          <Container>
                          <br />
                            <h1>Informacion Principal</h1><br></br><br></br>
                            <Button color="warning" onClick={()=>this.mostrarModalInsertar()}>Inserte datos</Button><br /><br />
                            <br />
                            <Table>
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Nombre</th>
                                  <th>Profesion</th>
                                  <th>Evento</th>
                                </tr>
                              </thead>

                              <tbody>
                                {this.state.data.map((dato) => (
                                  <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.nombre}</td>
                                    <td>{dato.profesion}</td>
                                    <td>
                                      <Button
                                        color="primary"
                                        onClick={() => this.mostrarModalActualizar(dato)}>Editar
                                      </Button>{" "}
                                      <Button color="secondary" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </Container>

                        <Modal isOpen={this.state.modalActualizar}>
                            <ModalHeader>
                            <div><h3>Editar Registro</h3></div>
                            </ModalHeader>

                              <ModalBody>
                              <FormGroup>
                                <label>
                                Id:
                                </label>

                                <input
                                  className="form-control"
                                  readOnly
                                  type="text"
                                  value={this.state.form.id}
                                />
                              </FormGroup>

                              <FormGroup>
                                <label>
                                  Nombre:
                                </label>
                                <input
                                  className="form-control"
                                  name="nombre"
                                  type="text"
                                  onChange={this.handleChange}
                                  value={this.state.form.nombre}
                                />
                              </FormGroup>

                              <FormGroup>
                                <label>
                                  Profesion:
                                </label>
                                <input
                                  className="form-control"
                                  name="profesion"
                                  type="text"
                                  onChange={this.handleChange}
                                  value={this.state.form.profesion}
                                />
                              </FormGroup>
                            </ModalBody>

                            <ModalFooter>
                              <Button
                                color="primary"
                                onClick={() => this.editar(this.state.form)}
                              >
                                Editar
                              </Button>
                              <Button
                                color="danger"
                                onClick={() => this.cerrarModalActualizar()}
                              >
                                Cancelar
                              </Button>
                            </ModalFooter>
                          </Modal>



                          <Modal isOpen={this.state.modalInsertar}>
                            <ModalHeader>
                            <div><h3>Inserte datos</h3></div>
                            </ModalHeader>

                            <ModalBody>
                              <FormGroup>
                                <label>
                                  Id:
                                </label>

                                <input
                                  className="form-control"
                                  readOnly
                                  type="text"
                                  value={this.state.data.length+1}
                                />
                              </FormGroup>

                              <FormGroup>
                                <label>
                                  Nombre:
                                </label>
                                <input
                                  className="form-control"
                                  name="nombre"
                                  type="text"
                                  onChange={this.handleChange}
                                />
                              </FormGroup>

                              <FormGroup>
                                <label>
                                  Profesion:
                                </label>
                                <input
                                  className="form-control"
                                  name="profesion"
                                  type="text"
                                  onChange={this.handleChange}
                                />
                              </FormGroup>
                            </ModalBody>

                            <ModalFooter>
                              <Button
                                color='primary'
                                onClick={() => this.insertar()}
                              >
                                Insertar
                              </Button>
                              <Button
                                className="btn btn-danger"
                                onClick={() => this.cerrarModalInsertar()}
                              >
                                Cancelar
                              </Button>
                            </ModalFooter>
                          </Modal>
                        </>
                      );
                    }
                  }


export default App;