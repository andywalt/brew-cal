require 'test_helper'

class ChooserControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get chooser_index_url
    assert_response :success
  end

end
