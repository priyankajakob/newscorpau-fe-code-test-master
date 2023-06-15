import { render, screen } from "@testing-library/react";
import List from "../List";
import { commonConstants } from "../../../constants";
import mockListData from './sampleArticlesList.json';
import { ArticleContext } from '../../../context';

describe("Test for List component", () => {

  it("Test 1: Checking if error is shown in case of api error", () => {
    render(<ArticleContext.Provider value={{error:true,loading:false}}><List/></ArticleContext.Provider>);
    
    const errorReg = new RegExp(commonConstants.NETWORK_ERROR)
    const htmlElement = screen.getByText(errorReg)
    expect(htmlElement).toBeInTheDocument()
  })

  it("Test 2: Checking if loading message is shown in case of page initial loading", () => {
    render(<ArticleContext.Provider value={{loading:true,error:false}}><List/></ArticleContext.Provider>);
    
    const loadingReg = new RegExp(commonConstants.LOADING)
    const htmlElement = screen.getByText(loadingReg)
    expect(htmlElement).toBeInTheDocument()
  })

  it("Test 2: Checking if only 4 articles are rendered on first page", () => {
    render(<ArticleContext.Provider value={{list:mockListData}}><List/></ArticleContext.Provider>);
    
    const nextPageReg = new RegExp(mockListData[4].headline)
    expect(() => screen.getByText(nextPageReg)).toThrow()
  })

});
