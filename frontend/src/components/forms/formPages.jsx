import React, { useState } from 'react';

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
        
    };

    return (
        <form onSubmit={handleSubmit}>
            {page === 1 && (
                <div>
                    <h2>Parte 1</h2>
                    <label>
                        Projeto:
                        <input type="text" name="projeto" value={formData.projeto} onChange={handleChange} />
                    </label>
                    <label>
                        Periodicidade:
                        <input type="text" name="periodicidade" value={formData.periodicidade} onChange={handleChange} />
                    </label>
                    <label>
                        Modalidade:
                        <input type="text" name="modalidade" value={formData.modalidade} onChange={handleChange} />
                    </label>
                    <label>
                        Título:
                        <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} />
                    </label>
                    <label>
                        Professor Coordenador:
                        <input type="text" name="professor_coordenador" value={formData.professores.professor_coordenador} onChange={handleChangeProfessores} />
                    </label>
                    <label>
                        Email Coordenador:
                        <input type="email" name="email_coordenador" value={formData.professores.email_coordenador} onChange={handleChangeProfessores} />
                    </label>
                    <label>
                        Professor Colaborador:
                        <input type="text" name="professor_colaborador" value={formData.professores.professor_colaborador} onChange={handleChangeProfessores} />
                    </label>
                    <label>
                        Email Colaborador:
                        <input type="email" name="email_colaborador" value={formData.professores.email_colaborador} onChange={handleChangeProfessores} />
                    </label>
                    <label>
                        Curso Coordenador:
                        <input type="text" name="curso_coordenador" value={formData.professores.curso_coordenador} onChange={handleChangeProfessores} />
                    </label>
                    <label>
                        Curso Colaborador:
                        <input type="text" name="curso_colaborador" value={formData.professores.curso_colaborador} onChange={handleChangeProfessores} />
                    </label>
                    <label>
                        Telefone Coordenador:
                        <input type="text" name="telefone_coordenador" value={formData.professores.telefone_coordenador} onChange={handleChangeProfessores} />
                    </label>
                    <label>
                        Telefone Colaborador:
                        <input type="text" name="telefone_colaborador" value={formData.professores.telefone_colaborador} onChange={handleChangeProfessores} />
                    </label>
                    <button type="button" onClick={handleNext}>Próximo</button>
                </div>
            )}

            {page === 2 && (
                <div>
                    <h2>Parte 2</h2>
                    <label>
                        Resumo:
                        <textarea name="resumo" value={formData.resumo} onChange={handleChange} />
                    </label>
                    <label>
                        Palavra Chave:
                        <input type="text" name="palavra_chave" value={formData.palavra_chave} onChange={handleChange} />
                    </label>
                    <label>
                        Justificativa:
                        <textarea name="justificativa" value={formData.justificativa} onChange={handleChange} />
                    </label>
                    <button type="button" onClick={handlePrevious}>Anterior</button>
                    <button type="button" onClick={handleNext}>Próximo</button>
                </div>
            )}

            {page === 3 && (
                <div>
                    <h2>Parte 3</h2>
                    <label>
                        Objetivos:
                        <textarea name="objetivos" value={formData.objetivos} onChange={handleChange} />
                    </label>
                    <label>
                        Fundamentação Teórica:
                        <textarea name="fundamentacao_teorica" value={formData.fundamentacao_teorica} onChange={handleChange} />
                    </label>
                    <button type="button" onClick={handlePrevious}>Anterior</button>
                    <button type="button" onClick={handleNext}>Próximo</button>
                </div>
            )}

            {page === 4 && (
                <div>
                    <h2>Parte 4</h2>
                    <label>
                        Metodologia:
                        <textarea name="metodologia" value={formData.metodologia} onChange={handleChange} />
                    </label>
                    <label>
                        Referências:
                        <textarea name="referencias" value={formData.referencias} onChange={handleChange} />
                    </label>
                    <button type="button" onClick={handlePrevious}>Anterior</button>
                    <button type="submit">Enviar</button>
                </div>
            )}
        </form>
    );
}

export default FormularioPaginado;
