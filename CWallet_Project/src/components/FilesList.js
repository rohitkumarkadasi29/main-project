import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import { API_URL } from '../utils/constants';
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import './FilesList.css';

const FilesList = (props) => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');


  const getFilesList = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/getAllFiles?userId=${props.user.id}`);
      setErrorMsg('');
      setFilesList(data);
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  useEffect(() => {

    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`${API_URL}/download/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };

  //delete
  const deleteFile = async (id, path, mimetype) => {
    try {
      const result = await axios.delete(`${API_URL}/File/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      getFilesList();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };


  return (
    <div className="files-container">
      <div className="header">
        <nav className="file-nav-wrapper">
          <NavLink activeClassName="active" className="nav-home-btn" to="/dashboard" exact={true}>
            Home
          </NavLink>
          <NavLink activeClassName="active" className="nav-home-Listbtn" to="/list">
            Files List
          </NavLink>
        </nav>
      </div>

      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <table className="files-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th className="table-head">Download File</th>
            <th>Delete File</th>
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesList.map(
              ({ _id, title, description, file_path, file_mimetype }) => (
                <tr key={_id}>
                  <td className="file-title">{title}</td>
                  <td className="file-description">{description}</td>
                  <td>
                    <a
                      href="#/"
                      onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)
                      }
                    >
                      Download
                    </a>
                  </td>
                  <td>
                    <a
                      href="#/"
                      onClick={() =>
                        deleteFile(_id, file_path, file_mimetype)
                      }
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};


const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(
  mapStateToProps,
)(FilesList);
