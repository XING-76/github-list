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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (since) => {
    setLoading(true);
    try {
      const res = await (await fetch(`https://api.github.com/users?since=${since}&per_page=20`)).json();
      setUsers(res);
      setLoading(false);
    } catch (err) {
      window.alert(`${err}, please reload the page.`);
    }
  }

  const getPage = (page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
    let newSince = 20 * (page - 1);
    getUsers(newSince);
  }

  const getUser = async (name) => {
    try {
      const res = await (await fetch(`https://api.github.com/users/${name}`, { username: name })).json();
      setUser([res]);
      setModalOpen(true);
    } catch (err) {
      window.alert(`${err}, please try again.`);
    }
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      {
        loading ? <div style={{textAlign: "center"}}>Loading...</div> : (
          <>
            <Card users={users} getUser={getUser} />
            <Pagination currentPage={currentPage} getPage={getPage}/>
            { modalOpen && <Modal closeModal={closeModal} user={user} /> }
          </>
        )
      }
    </>
  );
}

export default App;
