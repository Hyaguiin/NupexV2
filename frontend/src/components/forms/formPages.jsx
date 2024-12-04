import React, { useState } from 'react';
import './formPages.scss'; // Supondo que você tenha um arquivo de estilo específico para este componente

function FormularioPaginado() {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
        projeto: '',
        periodicidade: '',
        modalidade: '',
        titulo: '',
        professores: {
            professor_coordenador: '',
            email_coordenador: '',
            professor_colaborador: '',
            email_colaborador: '',
            curso_coordenador: '',
            curso_colaborador: '',
            telefone_coordenador: '',
            telefone_colaborador: ''
        },
        resumo: '',
        palavra_chave: '',
        justificativa: '',
        objetivos: '',
        fundamentacao_teorica: '',
        metodologia: '',
        referencias: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleChangeProfessores = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            professores: {
                ...formData.professores,
                [name]: value
            }
        });
    };

    const handleNext = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePrevious = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para um servidor ou API
    };

    return (
        <form onSubmit={handleSubmit} className="submit-project-form">
            {page === 1 && (
                <div>
                    <h2>Parte 1</h2>
                    <div className="form-group">
                        <label>
                            Projeto:
                            <input className="input-field" type="text" name="projeto" value={formData.projeto} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Periodicidade:
                            <input className="input-field" type="text" name="periodicidade" value={formData.periodicidade} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Modalidade:
                            <input className="input-field" type="text" name="modalidade" value={formData.modalidade} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Título:
                            <input className="input-field" type="text" name="titulo" value={formData.titulo} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Professor Coordenador:
                            <input className="input-field" type="text" name="professor_coordenador" value={formData.professores.professor_coordenador} onChange={handleChangeProfessores} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Email Coordenador:
                            <input className="input-field" type="email" name="email_coordenador" value={formData.professores.email_coordenador} onChange={handleChangeProfessores} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Professor Colaborador:
                            <input className="input-field" type="text" name="professor_colaborador" value={formData.professores.professor_colaborador} onChange={handleChangeProfessores} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Email Colaborador:
                            <input className="input-field" type="email" name="email_colaborador" value={formData.professores.email_colaborador} onChange={handleChangeProfessores} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Curso Coordenador:
                            <input className="input-field" type="text" name="curso_coordenador" value={formData.professores.curso_coordenador} onChange={handleChangeProfessores} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Curso Colaborador:
                            <input className="input-field" type="text" name="curso_colaborador" value={formData.professores.curso_colaborador} onChange={handleChangeProfessores} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Telefone Coordenador:
                            <input className="input-field" type="text" name="telefone_coordenador" value={formData.professores.telefone_coordenador} onChange={handleChangeProfessores} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Telefone Colaborador:
                            <input className="input-field" type="text" name="telefone_colaborador" value={formData.professores.telefone_colaborador} onChange={handleChangeProfessores} />
                        </label>
                    </div>
                    <button type="button" onClick={handleNext} className="btn-primary">Próximo</button>
                </div>
            )}

            {page === 2 && (
                <div>
                    <h2>Parte 2</h2>
                    <div className="form-group">
                        <label>
                            Resumo:
                            <textarea className="input-field" name="resumo" value={formData.resumo} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Palavra Chave:
                            <input className="input-field" type="text" name="palavra_chave" value={formData.palavra_chave} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Justificativa:
                            <textarea className="input-field" name="justificativa" value={formData.justificativa} onChange={handleChange} />
                        </label>
                    </div>
                    <button type="button" onClick={handlePrevious} className="btn-primary">Anterior</button>
                    <button type="button" onClick={handleNext} className="btn-primary">Próximo</button>
                </div>
            )}

            {page === 3 && (
                <div>
                    <h2>Parte 3</h2>
                    <div className="form-group">
                        <label>
                            Objetivos:
                            <textarea className="input-field" name="objetivos" value={formData.objetivos} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Fundamentação Teórica:
                            <textarea className="input-field" name="fundamentacao_teorica" value={formData.fundamentacao_teorica} onChange={handleChange} />
                        </label>
                    </div>
                    <button type="button" onClick={handlePrevious} className="btn-primary">Anterior</button>
                    <button type="button" onClick={handleNext} className="btn-primary">Próximo</button>
                </div>
            )}

            {page === 4 && (
                <div>
                    <h2>Parte 4</h2>
                    <div className="form-group">
                        <label>
                            Metodologia:
                            <textarea className="input-field" name="metodologia" value={formData.metodologia} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Referências:
                            <textarea className="input-field" name="referencias" value={formData.referencias} onChange={handleChange} />
                        </label>
                    </div>
                    <button type="button" onClick={handlePrevious} className="btn-primary">Anterior</button>
                    <button type="submit" className="btn-primary">Enviar</button>
                </div>
            )}
        </form>
    );
}

export default FormularioPaginado;