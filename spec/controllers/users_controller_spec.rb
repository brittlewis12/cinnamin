require 'spec_helper'

describe UsersController do
  describe "POST #create" do
    context "with valid params" do
      it "responds successfully with an HTTP 201 status code" do
        # post :create
        # expect(response).to be_success
        expect(response.status).to eq 201
      end
    end
    context "with invalid params" do
      it "responds unsuccesffuly with an HTTP 403 status code" do
        # post :create
        # expect(response).to_not be_success
        expect(response.status).to eq 403
      end
    end
  end
end
