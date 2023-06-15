import { render, screen, waitFor } from "@testing-library/react";
import List from "../index";
import { commonConstants } from "../../../../constants";
import * as articlesServices from "../../../../api/articles";
import mockedArticlesList from "./sampleArticlesList.json";

describe("Test for Articles List page : End to End", () => {
  it("Test 1: Checking page rendered with no data message when no articles sent from api", async () => {
    const mockFetchData = jest.spyOn(articlesServices, "fetchAll").mockImplementation(async () => {
        return ({});
      });

    render(<List />);

    expect(mockFetchData).toHaveBeenCalled();

    const NoDataTextReg = new RegExp(commonConstants.NO_RECORDS);
    await waitFor(() => {
      expect(screen.getByText(NoDataTextReg)).toBeInTheDocument();
    });
  });

//    it("Test 2: Checking end to end testing with component", async () => {
//       const mockFetchData = jest.spyOn(articlesServices, "fetchAll").mockImplementation(async () => {
//         return mockedArticlesList;
//       });

//       render(<List />);

//       expect(mockFetchData).toHaveBeenCalled();

//       // -----------------------------------------------------------
//       // TODO : To be fixed : screen is always rendering no records
//       // -----------------------------------------------------------
//       const totalPaginationButtons = await screen.findAllByRole('button');
//       await waitFor(
//           expect(totalPaginationButtons).toHaveLength(6)
//       )

//     })
});
