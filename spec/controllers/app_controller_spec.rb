require 'spec_helper'

describe AppController do
  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response.status).to eq 200
    end

    it "renders the index erb template" do
      get :index
      expect(response).to render_template :index
    end
  end
end
