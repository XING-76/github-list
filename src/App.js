import { useEffect, useState } from 'react';
import Card from './Components/Card';
import Pagination from './Components/Pagination/index';
import Modal from './Components/Modal/index';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (since) => {
    const res = await (await fetch(`https://api.github.com/users?since=${since}&per_page=20`)).json();
    setUsers(res);
  }

  const getPage = (page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
    let newSince = 20 * (page - 1);
    getUsers(newSince);
  }

  const getUser = async (name) => {
    const res = await (await fetch(`https://api.github.com/users/${name}`, { username: name })).json();
    setUser([res]);
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <Card users={users} getUser={getUser} />
      <Pagination currentPage={currentPage} getPage={getPage}/>
      { modalOpen && <Modal closeModal={closeModal} user={user} /> }
    </>
  );
}

export default App;
