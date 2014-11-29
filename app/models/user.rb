class User < ActiveRecord::Base
  validates :email, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  
  attr_reader :password
  
  after_initialize :ensure_session_token
  
  has_many :taggings
  
  has_many :tags, through: :taggings
  
  
  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    
    if user
      return user if user.valid_password?(password)
    end
    
    nil
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end
  
  private
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
  
end
