import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Data from '../assets/Test.json'

const MainScreen = () => {
    const truncate = (str) => {
        if (window.innerWidth < 1280 && window.innerWidth > 840) {
            if (str) {
                return str.length > 60 ? str.substring(60, 0) + "..." : str;
            }
            return "-";
        } else if (str) {
            return str.length > 120 ? str.substring(130, 0) + "..." : str;
        }
        return "-";
    };
    const [searchData,setSearchData]=useState([])
    const [searchText,setSearchText]=useState('')
    useEffect(()=>{
        if(searchText === ''){
                setSearchData(Data)
            
        }
        else{
            // Data.filter(item=>item.name.includes(searchText)).map(new => (<h1></h1>))
            Data.filter(name => name.Video.toLowerCase().includes(searchText)).map(filteredName =>{ 
                setSearchData([filteredName])
                // console.log(filteredName);
            })
        }
    },[searchText])
    console.log(searchData,',,,,');
  return (
    <Cover>
    <div className="wrapper">
        <Top>
        
            <h4>Search</h4>
        </Top>
        <BottomSect>
            <SearchSect>
                <SearchBox>
                    <input type="text" placeholder="food name" onChange={(e)=>setSearchText(e.target.value)} value={searchText}/>
                </SearchBox>
            </SearchSect>
            <MappingSect>
                <Container>
                {searchData?.map((item)=>(
                    <Widget>
                        <Image>
                        <img src={item.imageUrl} alt={item.Video}/>
                        </Image>
                        <DescriContain>
                        <h4>{item.Video}</h4>
                        <p>{truncate(item.Introduction)}</p><span>Read more</span>
                        </DescriContain>
                    </Widget>
                ))}
                </Container>
            </MappingSect>
        </BottomSect>
        </div>
    </Cover>
  )
}

export default MainScreen
const Cover = styled.div`
    width:100%;
    height:100vh;
`;
const Top = styled.div`
    padding:20px 0px;
    border-bottom:3px solid #000;
    h4{
        font-weight:1.2em;
        color:#30384d;
    }
`;
const BottomSect = styled.div`
    padding-top:20px;
`;
const SearchSect = styled.div``;
const SearchBox = styled.div`
    width:350px;
    float:right;
    height:45px;
    background:#f7f7f7;
    border-radius:20px;
    @media(max-width:480px){
        width:100%;
    }
    input{
        width:100%;
        height:100%;
        padding:0px 10px;
    }
`;
const MappingSect = styled.div`
    height:100vh;
    // background:red;
    padding-top:50px;
`;
const Container = styled.div`
    background:#f7f7f7;
    padding:20px;
    border-radius:10px;
    display:flex;
    flex-wrap:wrap;
    grid-gap:20px;
    @media(max-width:480px){
        grid-gap:10px;
    }
`;
const Widget =styled.div`
    width:23%;
    @media(max-width:480px){
        width:48%;
    }

`;
const Image = styled.div`
    width:100%;
    border-radius:8px;
    overflow:hidden;
    img{
        width:100%;
    }
`;
const DescriContain = styled.div`
    h4{
        font-size:22px;
    }
    p{
        font-size:12px;
    }
    span{
        font-size:12px;
        font-weight:bold;
        color:blue;
    }
`;