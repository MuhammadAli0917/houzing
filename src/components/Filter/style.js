import styled from "styled-components";
import {ReactComponent as Search} from "../../assets/icons/search.svg";
import {ReactComponent as Filter} from "../../assets/icons/setting.svg";
import {ReactComponent as Houses} from "../../assets/icons/houses.svg";


export const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`

export const Icons = styled.div``

Icons.Filter = styled(Filter)`
  margin-right: 8px;
`
Icons.Search = styled(Search)`
  margin-right: 8px;
`
Icons.Houses = styled(Houses)`
  margin-right: 8px;
`

export const MenuWrapper = styled.div`
  padding: 30px;
  background: #fff;
  border: 1px solid #e6e9ec;
  justify-content: start;
`

export const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  justify-content: start;
`



