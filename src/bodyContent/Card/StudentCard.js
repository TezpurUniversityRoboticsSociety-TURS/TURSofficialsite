import StudentCardItem from "./StudentCardItem";
import StartFirebase from "../../FirebaseDatabase";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const db = StartFirebase();

const Card = (props) => {

  const [memberData, setMemberData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    let records = [];
    const dbRef = ref(db, "StudentCoreMembers");
    onValue(dbRef, (data) => {
      data.forEach((dataitems) => {
        records.push(dataitems.val());
      });
      setIsLoading(false);
      setMemberData(records);
    });
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
        {!isLoading && memberData.map((data, index) => {
          return <StudentCardItem key={index} image={props.images[index]} name={data.name} post={data.post} email={data.email} linkedin={data.linkedin}/>
        })}
    </>
  );
};

export default Card;
