import React, { useEffect, useState } from 'react';

import QuestionCard from "../components/QuestionCard"
import QuestionTab from "../components/QuestionTab"

import styles from './_pages.module.css'

import { apiClient } from '../API/api-client';
import { ROUTE, SEARCH_ROUTE } from '../utils/constant';
import Loader from '../components/Loader.jsx';

import { useOutletContext } from 'react-router-dom';


const Questions = () => {
  const [isActive, setIsActive] = useState(localStorage.getItem("isActive") || "creation");
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { search, isSearch, setIsSearch } = useOutletContext();


  const getQuestion = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get(`${ROUTE}?order=desc${isActive === "Bounties" && isActive ? "&has_bounty=true" : `&sort=${isActive}`}&site=stackoverflow`);
      setQuestion(response.data.items);
      setError(null);

    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getSearchQuestion = async (query) => {
    try {
      // const searchString = search.split(" ").join("+");
      const searchString = encodeURIComponent(query).replace(/%20/g, "+");
      setLoading(true);
      const response = await apiClient.get(`${SEARCH_ROUTE}?order=desc&q=${searchString}&site=stackoverflow`);
      setQuestion(response.data.items);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setIsSearch(false);
      setError(null);
    }
  }

  useEffect(() => {
    localStorage.setItem("isActive", isActive); // Save isActive whenever it changes
    if (!isSearch && isActive) {
      getQuestion();
    }
    else if (isSearch) {
      setIsActive(null); 
      getSearchQuestion(search);
    }
  }, [isActive, isSearch]);

  return (
    <div className={styles.questionContainer}>
      <QuestionTab isActive={isActive} setIsActive={setIsActive} />
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Error: {JSON.stringify(error.code) + " Too many request to StackOerflow API (For Developer)"}</p>
      ) : (
        question.map((item, index) => <QuestionCard key={index} item={item} />)
      )}
    </div>
  );
};

export default Questions;