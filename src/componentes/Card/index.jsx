import Code from './assets/code.svg';
import Chat from './assets/chat.svg';
import Share from './assets/share.svg';
import './style.css'

export default function Card({ imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuario}) {
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={imagemUrl} alt="imagem do post" />
            </div>
            <div className="card__conteudo">
                <h3>{titulo}</h3>
                <p>{resumo}</p>
            </div>

            <div className='conteudo__rodape'>
                <ul>
                    <li>
                        <img src={Code} alt='códigos' />
                        {linhasDeCodigo}
                    </li>
                    <li>
                        <img src={Share} alt='compartilhamento' />
                        {compartilhamentos}
                    </li>
                    <li>
                        <img src={Chat} alt='comentários' />
                        {comentarios}
                    </li>
                </ul>

                <div className='rodape__usuario'>
                    <img src={usuario.imagem} alt='imagem do usuário' />
                    {usuario.nome}
                </div>
            </div>
        </article>
    )
}
