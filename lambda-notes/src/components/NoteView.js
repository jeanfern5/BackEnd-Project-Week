import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
// import { Modal } from 'reactstrap';


const NoteView = props => {
    console.log('noteview props:', props);
    console.log('noteview propsnotes:', props.notes)
    // eslint-disable-next-line
    const note = props.notes.find(note => note.id == parseInt(props.match.params.id, 10));
    console.log('from noteview:', note);
    
    return (
        <NoteViewWrap>
            <LinkWrap>
                <Link>
                    <NavLink to={`/edit-view/${note.id}`} onClick={() => props.editNote(note.id)}>edit</NavLink>
                </Link>
                <Link>
                    <NavLink to="/list-view" onClick={()=>props.deleteNote(note.id)}>delete</NavLink>
                </Link>
            </LinkWrap>            
            <ContentWrap>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
            </ContentWrap>    
        </NoteViewWrap>
    )
}

// class NoteView extends React.Component {
//     state={
//         modal: false
//     }

//     toggle = () => {
//         this.setState({modal:!this.state.modal})
//     }

//     render() {
//         const note = this.props.notes.find(note => note.id == parseInt(this.props.match.params.id, 10));
//         return (
//             <NoteViewWrap>
//                  <div>
//                     {this.state.modal ? (
//                         <div>
//                             <h3>Are you sure you want to delete this?</h3>
//                             <button delete onClick={() => this.props.deleteNote(note.id)}>Delete</button>
//                             <button onClick={this.modalClose}>No</button>
//                         </div>
//                     ) : null}
//                 </div>                
//                 <LinkWrap>
//                     <Link>
//                         <NavLink to={`/edit-view/${note.id}`} onClick={() => this.props.editNote(note.id)}>edit</NavLink>
//                     </Link>
//                     <Link>
//                         <NavLink to="/list-view" onClick={this.modalOpen}>delete</NavLink>
//                     </Link>
//                 </LinkWrap>
//                 {/* <div>
//                     {this.state.modal ? (
//                         <div>
//                             <h3>Are you sure you want to delete this?</h3>
//                             <button onClick={() => this.props.deleteNote(note.id)}>Delete</button>
//                             <button onClick={this.closeModal}>No</button>
//                         </div>
//                     ) : null}
//                 </div>             */}
//                 <ContentWrap>
//                     <h2>{note.title}</h2>
//                     <p>{note.content}</p>
//                 </ContentWrap>    
//             </NoteViewWrap>
//         )
//     }
// }

const NoteViewWrap = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px 5%;
`;

const LinkWrap = styled.div`
    display:flex;
    flex-direction:row;  
    justify-content: flex-end;  
`;

const Link = styled.a`
    padding:6px 1.5%;
    font-weight: bold;
    font-size: .85rem;
    color:black;
`;

const ContentWrap = styled.div`
    margin-top: 20px;
    line-height: 24px;
`;


export default NoteView;
