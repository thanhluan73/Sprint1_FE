import styled from 'styled-components';
// import { palette } from 'styled-theme';
import WithDirection from 'settings/withDirection';
const BlogItemWrapper = styled.div`
    margin-top:30px;
    padding-bottom:30px;
    border-bottom: 1px solid #f2f2f2;
    .blog-title{
        text-decoration:none;
        color:rgba(0,0,0,0.87);
        font-weight:600;
        line-height:1.5;
        font-size:1em;
    }
    .blog-meta{
        text-decoration:none;
        color:rgba(0,0,0,0.54);
        font-weight:400;
        line-height:1;
        font-size:0.75em;
        
    }
    .blog-des{
        text-decoration:none;
        color:rgba(0,0,0,0.87);
        font-weight:400;
        line-height:1.5;
        font-size:0.875em;
        text-align:justify;
    }
    .blog-content{
        font-size:0.875em;
        text-align:justify;
        line-height:1.5em;
        font-weight:400;
        color:rgba(0,0,0,0.87);
        img{
            width:100%;
        }
    }
    
`;

export default WithDirection(BlogItemWrapper);
