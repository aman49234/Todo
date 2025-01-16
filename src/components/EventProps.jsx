const Profile = (props) => {
    const{
        name,
        profession,
        awards,
        discovery,
        } = props;
        return (
          <section className="profile">
            <h2>{name}</h2>
            
            <ul>
              <li><b>Profession:</b> {profession}</li>
              <li>
                <b>Awards: {awards.length} </b>
                ({awards.join(', ')})
              </li>
              <li>
                <b>Discovered: </b>
                {discovery}
        </li>
      </ul>
    </section>
  );
    

}
const EventProps=()=>{
    return(
        <>
        <h1>Notable Scientist</h1>
        <Profile
        
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        name="Aman Prasad"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      
</>
    );

}

export default EventProps;



